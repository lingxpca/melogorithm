import { useState, useEffect } from "react";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import ChildComponent from "./ChildComponent";
import { data } from "./data";
import "./styles.css";

export default function App() {
  const [open, setOpen] = useState(false);

  const options = {
    size: 100,
    minSize: 30,
    gutter: 8,
    numCols: 6,
    fringeWidth: 45,
    compact: true,
    gravitation: 5
  };

  // Drag-to-pan for desktop mice (Chrome/Safari/Firefox)
  useEffect(() => {
    const bubbles = document.querySelector(".myBubbleUI");
    if (!bubbles) return;

    const dragspeed = 2;
    let isDown = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - bubbles.offsetLeft;
      startY = e.pageY - bubbles.offsetTop;
      scrollLeft = bubbles.scrollLeft;
      scrollTop = bubbles.scrollTop;
    };

    const onMouseLeave = () => { isDown = false; };
    const onMouseUp = () => { isDown = false; };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - bubbles.offsetLeft;
      const y = e.pageY - bubbles.offsetTop;
      bubbles.scrollLeft = scrollLeft - (x - startX) * dragspeed;
      bubbles.scrollTop = scrollTop - (y - startY) * dragspeed;
    };

    bubbles.addEventListener("mousedown", onMouseDown);
    bubbles.addEventListener("mouseleave", onMouseLeave);
    bubbles.addEventListener("mouseup", onMouseUp);
    bubbles.addEventListener("mousemove", onMouseMove);

    // prevent dragging images
    const imgs = bubbles.querySelectorAll("img");
    imgs.forEach((img) => (img.ondragstart = () => false));

    return () => {
      bubbles.removeEventListener("mousedown", onMouseDown);
      bubbles.removeEventListener("mouseleave", onMouseLeave);
      bubbles.removeEventListener("mouseup", onMouseUp);
      bubbles.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const handleClick = () => setOpen(true);
  const close = () => setOpen(false);

  const children = data.map((d, i) => (
    <ChildComponent key={i} data={d} setClick={handleClick} />
  ));

  return (
    <>
      <BubbleUI options={options} className="myBubbleUI">
        {children}
      </BubbleUI>

      {open && (
        <div className="overlay" onClick={close} role="button" tabIndex={0}>
          <div className="overlayCard" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={close} aria-label="Close">
              ✕
            </button>
            <video
              src="./diving.mp4"
              autoPlay
              muted
              controls
              playsInline
              className="overlayVideo"
            />
          </div>
        </div>
      )}
    </>
  );
}
