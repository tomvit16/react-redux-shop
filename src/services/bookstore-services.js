
export default class BookstoreServices {

    data = [
        { 
            id: 1,
            title: 'The Road to learn React: Your journey to master plain yet pragmatic React.js',
            author: 'Robin Wieruch',
            price: 24,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41JvDSREHWL._SX384_BO1,204,203,200_.jpg',
           },
        { 
            id: 2, 
            title: 'Learning React: A Hands-On Guide to Building Web Applications Using React and Redux (2nd Edition)', 
            author: 'Kirupa Chinnathambi',
            price: 26,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51awtSXuNXL._SX385_BO1,204,203,200_.jpg',
            }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
                resolve(this.data)    
            });
        
    }
}