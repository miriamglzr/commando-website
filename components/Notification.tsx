import React, { useEffect, useState } from "react";
import { notification, Space } from "antd";
// import { useAppCtx } from "../context.tsx/Context";

export default function Notification() {
	// const appCtxt = useAppCtx();
	const [count, setCount] = useState(0);

	// const openNotification = () => {
	// 	setCount(1);
	// 	const noti = appCtxt?.appNotification;
	// 	const type = noti!.type ?? "info";
	// 	notification[`${type === "success" ? "success" : "error"}`]({
	// 		message: ` ${appCtxt?.appNotification.message}`,
	// 		placement: "bottomRight",
	// 		className: "notification",
	// 		//maxCount: 1,// maxCount of notifications api not working
	// 	});
	// 	setTimeout(() => {
	// 		appCtxt?.clearNotifications();
	// 		setCount(0);
	// 	}, 400);
	// };

	// useEffect(() => {
	// 	if (appCtxt?.appNotification.open && count === 0) {
	// 		openNotification();
	// 	}
	// }, [appCtxt?.appNotification]);

	return (
		<div>
			<Space></Space>
		</div>
	);
}
