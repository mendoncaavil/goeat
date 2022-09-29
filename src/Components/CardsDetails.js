import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {DELETE, Add, REMOVE} from "../Redux/Actions/Action"


function CardsDetails() {
  const [data, setData] = useState([]);
  console.log(data);

  const { id } = useParams();


  const history = useNavigate();

  const dispatch = useDispatch();

  //Add data

  const send = (e) => {
    dispatch(Add(e))      
  }

  const dlt = (id) => {
    dispatch(DELETE(id))
    history('/')
  }


  //remove one 
  const remove = (item) => {
    dispatch(REMOVE(item));
  }


  // console.log(id);

  const getData = useSelector((state) => state.cartReducer.carts);
  //   console.log(getData)

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Detail Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src= {ele.imgdata} />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹ {ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            {" "}
                            <strong>Total</strong> :₹ {ele.price * ele.qnty}
                          </p>
                            <div className="mt-5 d-flex justify-content-between align-items-center" style={{width: 100, cursor:"pointer", background: "#ddd", color: "#111"}}>
                                  <span style={{fontSize: 24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id): ()=>remove(ele)}>-</span>  
                                  <span style={{fontSize: 22}}>{ele.qnty}</span>  
                                  <span style={{fontSize: 24}} onClick={()=>send(ele)}>+</span>  
                            </div>        

                        </td>
                        <td>
                          <p>
                            {" "}
                            <strong>Rating </strong> :{" "}
                            <span
                              style={{
                                background: "green",
                                color: "white",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ★
                            </span>{" "}
                          </p>
                          <p>
                            <strong> Order Review :</strong> {ele.somedata}
                          </p>
                          <p>
                            <strong> Remove</strong> :{" "}
                            <span>
                              {" "}
                              <i
                                className="fas fa-trash" onClick={()=>dlt(ele.id)}
                                style={{ color: "red", cursor: "pointer" }}
                              ></i>{" "}
                            </span>{" "}
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default CardsDetails;
