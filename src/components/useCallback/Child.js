import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>
    {returnComment("Pedro")}
    {/* Here the returComment('pedro') is passsed as a function. In useMemo example, it was value. So if we use useMemo here it
    won't work. So useCallback used in CallbackTutorial.js */}
    </div>;
}

export default Child;