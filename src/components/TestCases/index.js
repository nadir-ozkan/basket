import getBasket from "../../Basket.js";

const TestCases = () => {
  const basket = getBasket();

  return (
    <div className="test-cases">
      <h1>Here are test cases</h1>

      <div className="test-case">
        <button
          onClick={(e) => {
            basket.clear();

            basket.add("B01");
            basket.add("G01");

            basket.list();

            console.log(`Total : ${basket.total()}`);
            e.target.closest("div").querySelector(".total").textContent =
              "$" + basket.total();
          }}
        >
          Test Case 01
        </button>
        <span>B01, G01</span>
        <span className="total"></span>
      </div>

      <div className="test-case">
        <button
          onClick={(e) => {
            basket.clear();

            // Test case 2 => Passed
            basket.add("R01");
            basket.add("R01");

            basket.list();

            console.log(`Total : ${basket.total()}`);
            e.target.closest("div").querySelector(".total").textContent =
              "$" + basket.total();
          }}
        >
          Test Case 02
        </button>
        <span>R01, R01</span>
        <span className="total"></span>
      </div>

      <div className="test-case">
        <button
          onClick={(e) => {
            basket.clear();

            basket.add("R01");
            basket.add("G01");

            basket.list();

            console.log(`Total : ${basket.total()}`);
            e.target.closest("div").querySelector(".total").textContent =
              "$" + basket.total();
          }}
        >
          Test Case 03
        </button>
        <span>R01, G01</span>
        <span className="total"></span>
      </div>

      <div className="test-case">
        <button
          onClick={(e) => {
            basket.clear();

            basket.add("B01");
            basket.add("B01");
            basket.add("R01");
            basket.add("R01");
            basket.add("R01");

            basket.list();

            console.log(`Total : ${basket.total()}`);
            e.target.closest("div").querySelector(".total").textContent =
              "$" + basket.total();
          }}
        >
          Test Case 03
        </button>
        <span>B01, B01, R01, R01, R01</span>
        <span className="total"></span>
      </div>
    </div>
  );
};

export default TestCases;
