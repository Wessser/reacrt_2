
function NotificationItem(props){
  return(
    <li className={"notification"}>
    <div className="notification-part">
      <h1 className="notification-title">{props.title}</h1>
      <p className="notification-descr">{props.descr}</p>
    </div>
  </li>
  );
}


export default NotificationItem;