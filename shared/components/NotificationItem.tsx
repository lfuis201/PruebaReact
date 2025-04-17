interface NotificationItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
}

function NotificationItem({
  icon,
  title,
  description,
  bgColor = "bg-blue-100 hover:bg-blue-200",
}: NotificationItemProps) {
  return (
    <div className={`flex items-center p-3 rounded-lg transition  hover:bg-gray-300`}>
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full mr-3 ${bgColor}`}
      >
        {icon}
      </div>{" "}
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default NotificationItem;
