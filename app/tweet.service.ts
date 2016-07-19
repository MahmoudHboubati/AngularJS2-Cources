export class TweetService {
    getTweets(): Tweet[] {
        return [
            {
                id: 1,
                iLike: false,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                account: 'mhmoud.21830',
                likes: 5,
                imgUrl: 'http://lorempixel.com/100/100/people?' + 1
            },
            {
                id: 2,
                iLike: true,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                account: 'ammar.21830',
                likes: 3,
                imgUrl: 'http://lorempixel.com/100/100/people?' + 2
            },
            {
                id: 3,
                iLike: false,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
