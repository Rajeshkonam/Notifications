const Notification = (props) => {
  const { className, url, text } = props;
  return (
    <div className={`${className}`}>
      <img src={url} className="xx" />
      <p className="p1">{text}</p>
    </div>
  );
};

const element = (
  <div className="div1">
    <h1>Notifications</h1>
    <div>
      <Notification
        className="div2"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="div3"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="div4"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="div5"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
