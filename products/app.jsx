import React from "react";

export default function App() {
  return (
    <div>
      <h3> Product List from remote container </h3>

      <ul>
        <li>
          Host container is fetching remote container using remoteEntry.js
        </li>
        <li>
          Products component is exposed in remote and is fetched dynamically
          using remoteEntry.js file.
        </li>
        <li>Lazy loading of remote component</li>
      </ul>
    </div>
  );
}
