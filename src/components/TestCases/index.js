import getBasket from "../../Basket.js";

const TestCases = () => {
  const basket = getBasket();

  return (
    <div className="test-cases">
      <h1>Here is test cases</h1>

      <div>
        <button
          onClick={() => {
            basket.clear();

            basket.list();

            // Test case 1 => Passed
            // basket.add("B01");
            // basket.add("G01");

            // Test case 2 => Passed
            // basket.add("R01");
            // basket.add("R01");

            // Test case 3 => Passed
            // basket.add("R01");
            // basket.add("G01");

            // Test case 4 => Passed
            // basket.add("B01");
            // basket.add("B01");
            // basket.add("R01");
            // basket.add("R01");
            // basket.add("R01");

            basket.list();
            basket.listOffers();

            console.log(`Total : ${basket.total()}`);
          }}
        >
          Test Case 01
        </button>
      </div>
    </div>
  );
};

export default TestCases;
