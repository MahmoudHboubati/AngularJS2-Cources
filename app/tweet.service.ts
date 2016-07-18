export class TweetService {
    getTweets(): Tweet[] {
        return [
            {
                id: 1,
                iLike: false,
                text: 'this is good',
                account: 'mhmoud.21830',
                likes: 5,
                imgUrl: 'http://lorempixel.com/100/100/people?' + 1
            },
            {
                id: 2,
                iLike: true,
                text: 'this is good',
                account: 'ammar.21830',
                likes: 3,
                imgUrl: 'http://lorempixel.com/100/100/people?' + 2
            },
            {
                id: 3,
                iLike: false,
                text: 'this is good',
                account: 'emran.21830',
                likes: 2,
                imgUrl: 'http://lorempixel.com/100/100/people?' + 3
            }];
    }
}
export class Tweet {
    id: number;
    text: string;
    account: string;
    likes: number;
    imgUrl: string;
    iLike: boolean;
}
