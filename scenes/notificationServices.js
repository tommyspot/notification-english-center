import PushNotification from 'react-native-push-notification';
import { NOTIFICATION_TYPE } from './constants';


class NotificationServices {
  static notificationQueues = [];

  static add(type, messageInfo){
    const { message, startTime } = messageInfo;
    const numOfBadges = (this.notificationQueues.length + 1).toString();

    let notification;
    switch (type) {
      case NOTIFICATION_TYPE.LOCAL_NOTIFICATION:
        notification = () => PushNotification.localNotification({ message });
        break;
      case NOTIFICATION_TYPE.LOCAL_NOTIFICATION_SCHEDULE:
        notification = () => PushNotification.localNotificationSchedule({
          message,
          date: new Date(Date.now() + (startTime * 1000)), // in startTime secs
          number: numOfBadges,
        });
        break;
    }
    this.notificationQueues.push(notification);
  }

  static pushNotification() {
    this.notificationQueues.forEach(notification => {
      notification();
    });
  }

  static clearNotification() {
    this.notificationQueues = [];
    PushNotification.setApplicationIconBadgeNumber(0);
  };
}

export default NotificationServices;

