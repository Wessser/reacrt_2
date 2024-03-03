import NotificationItem from "./NotificationItem";


function Notification(props){
  return(
    <div className="app-box">
      <h1 className="box-title">Уведомления</h1>
      <ul className='notification-container'>
        {props.tasks.map((task, index) => (
          <NotificationItem title={task.title} descr={task.descr} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default Notification;