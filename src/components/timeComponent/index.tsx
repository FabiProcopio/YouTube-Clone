

function GetTimeDifference(created_at: string): string {
    const now = new Date();
    const createdDate = new Date(created_at);
    const seconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000);
    if (seconds < 60) {
      return `${seconds} second${seconds > 1 ? 's' : ''}`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours > 1 ? 's' : ''}`;
    }
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''}`;
  }

  
export default GetTimeDifference;