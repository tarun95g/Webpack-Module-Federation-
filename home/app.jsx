import React, { useState, lazy, Suspense } from "react";

const ProductList = lazy(() => import("Product/products"));

const App = () => {
  const [fetchComic, setFetchComic] = useState(false);

  return (
    <>
      <h1>Module federation example</h1>
      <h4>Fetch Products from remote application into host applications </h4>

      <div style={{ border: "1px solid grey", padding: "16px" }}>
        <h1>Host container</h1>

        {fetchComic ? (
          <div style={{ border: "1px solid brown", padding: " 16px" }}>
            <Suspense fallback={null}>
              <div>
                {" "}
                <ProductList />
              </div>
            </Suspense>
          </div>
        ) : (
          <button onClick={() => setFetchComic(true)}>
            Fetch products from remote
          </button>
        )}
      </div>
    </>
  );
};

export default App;
