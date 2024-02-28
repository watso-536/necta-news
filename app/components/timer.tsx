export function timer(seconds: any) {
    const currentTime = Date.now();
    const createdTime = new Date(seconds).getTime();
    const timedifference = Math.floor((currentTime - createdTime) / 1000);

    const minutes = Math.floor(timedifference / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7)


    if (weeks > 0) {
        return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? "s" : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if(minutes > 0){
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    }
    else {
        return 'Just now';
    }


}
