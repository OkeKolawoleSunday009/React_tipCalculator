import React from 'react'
// import styles from './my-style.module.css'; 

export default function Calculator() {



    
    let tip = document.querySelectorAll(".tip");
    let tipAmount = document.querySelector("#tipAmount");
    let total = document.querySelector("#total");
    let people = document.querySelector("#people");
    let zeroBill = document.querySelector("#zeroBill");
    let bill = document.querySelector("#bill");
    let zero = document.querySelector("#zero");
    let reset = document.querySelector("#reset");

    people.addEventListener("input", function() {
        visible(this, zero);
    });
    bill.addEventListener("input", function() {
        visible(this, zeroBill);
    });

    function sliced (val) {
        return parseInt(val.value.substring(0, val.value.length - 1));
    }


    for (let index = 0; index < tip.length; index++) {
        tip[index].addEventListener("click", function() {
            for (let i = 0; i < tip.length; i++) {
                if(tip[i].classList.contains("active")){
                    tip[i].classList.remove("active");
                }
            }
            this.classList.add("active");
            let totalTipAmount = (sliced(this) / 100) * bill.value;
            let totalPerson = totalTipAmount * people.value;
            tipAmount.innerText = totalTipAmount.toFixed(2);
            total.innerText = totalPerson.toFixed(2);
        });
        
    }

    function visible (op, p2) {
        if (op.value != "") {
            console.log("Not empty");
            reset.style.opacity = "initial";
        }
    
        if(op.value <= 0) {
            p2.classList.remove("activeZero");
            op.style.cssText = "outline: 2px solid red";
        }else {
            p2.classList.add("activeZero");
            op.style.cssText = "border: none";
        }
        
        return parseInt(op.value);
    }

  return (
    <div>
         <main>
        <section className="calc">
            <div id="calculator">
                {/* <!-- <label for="bill">Bill</label> --> */}
                <div className="people">
                    <div id="person">Bill</div>
                    <div id="zeroBill" className ="activeZero">Can't be zero</div>
                </div>
                <input type="number" id="bill" placeholder="0" required/>
                <label for="percentage">Select Tip %</label>
                <div className="tips">
                    <input type="button" name="" id="" value="5%" className="tip"/>
                    <input type="button" name="" id="" value="10%" className="tip"/>
                    <input type="button" name="" id="" value="15%" className="tip"/>
                    <input type="button" name="" id="" value="25%" className="tip"/>
                    <input type="button" value="50%" className="tip"/>
                    <input type="number" className="tipEnd" placeholder="Custom"/>
                </div>
                <div className="people">
                    <div id="person">Number Of People</div>
                    <div id="zero" className="activeZero">Can't be zero</div>
                </div>
                <input type="number" id="people" placeholder="0" required/>
            </div>
        </section>
        <section className="results">
            <div className="result">
                <div className="tipPerson">
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>
                <div className="tipResult">
                    <h1>$<span id="tipAmount">0.00</span></h1>
                </div>
            </div>
            <div className="result">
                <div className="tipPerson">
                    <h4>Total</h4>
                    <p>/ person</p>
                </div>
                <div className="tipResult">
                    <h1>$<span id="total">0.00</span></h1>
                </div>
            </div>
            <div className="reset">
                <button id="reset">RESET</button>
            </div>
        </section>
         </main>
    </div>
  )
}
