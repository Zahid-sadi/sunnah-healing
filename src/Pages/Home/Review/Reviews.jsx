
import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews ,setReviews]= useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data =>{
            setReviews(data)
            console.log(data);
        })
    },[])

    // const reviews =[
    //     {
    //       _id: "647ea2c6ac041fd0e2c4578a",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Dana Obrien",
    //       description: "Cupidatat anim veniam Lorem eiusmod velit pariatur commodo consectetur voluptate enim ipsum. Incididunt magna voluptate velit ipsum veniam. Sit duis aliquip velit magna laboris id Lorem duis tempor labore Lorem exercitation ipsum tempor. Laborum irure officia ullamco nulla aliquip ipsum consectetur incididunt do fugiat eu.\r\n"
    //     },
    //     {
    //       _id: "647ea2c6a4cd8d51958b385e",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Mclean Foster",
    //       description: "Lorem qui cupidatat veniam cillum. Nisi mollit consequat dolore pariatur aliqua laboris deserunt Lorem commodo cillum Lorem deserunt labore veniam. Aliqua culpa amet pariatur enim esse sit sint cupidatat consequat incididunt nisi. Lorem cillum dolore anim minim mollit voluptate aliquip consequat consectetur non. Laborum ex do ullamco dolore anim cupidatat nisi nisi pariatur ea. Nisi ipsum exercitation eu eu velit non commodo tempor. Est velit eiusmod culpa deserunt do sit.\r\n"
    //     },
    //     {
    //       _id: "647ea2c6f585aaffd51a157c",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Madeline Jacobs",
    //       description: "Nulla reprehenderit qui dolor consequat ut mollit Lorem deserunt ea excepteur commodo reprehenderit sunt sint. Lorem proident eiusmod do eiusmod eu ex ea officia do consequat anim amet sint. Laborum quis commodo officia et cillum veniam dolor sint qui et dolor. Nostrud cupidatat pariatur occaecat fugiat quis aliqua ex deserunt veniam officia.\r\n"
    //     },
    //     {
    //       _id: "647ea2c6e05be8a22cd59e75",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Shepherd Ellis",
    //       description: "Eiusmod sunt tempor cillum ut laborum ullamco velit sunt nostrud velit. Proident pariatur in pariatur est id quis labore aliqua officia commodo Lorem eu cupidatat. Sit incididunt exercitation proident dolore anim cillum dolore velit proident. Officia aute qui est quis pariatur commodo anim et.\r\n"
    //     },
    //     {
    //       _id: "647ea2c62cea03754c3c0d7f",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Fitzgerald Bryant",
    //       description: "Magna ut pariatur cillum est nisi. Laborum elit nostrud nulla ad aliquip duis consectetur esse do qui nisi Lorem nostrud. Enim excepteur nulla cillum enim consequat. Ipsum elit do est reprehenderit. Excepteur commodo exercitation eu in sint. Ad excepteur tempor commodo consectetur. Fugiat voluptate eiusmod deserunt irure laboris ad pariatur.\r\n"
    //     },
    //     {
    //       _id: "647ea2c69bd4577b1b751ee0",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Elvira Marsh",
    //       description: "Magna nisi quis commodo est laborum exercitation aliquip aute occaecat nisi exercitation. Et esse quis commodo sit consectetur enim tempor ad eiusmod amet adipisicing. Excepteur ex aute eu proident reprehenderit dolore eiusmod duis ullamco veniam Lorem dolor.\r\n"
    //     },
    //     {
    //       _id: "647ea2c6d59fda1759ba9ffb",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Hooper Garner",
    //       description: "Sit voluptate cupidatat nisi duis culpa do officia laborum do. Incididunt excepteur occaecat ut do dolore. Ea magna proident ex cillum laborum aliqua Lorem do et pariatur sint. Laborum commodo fugiat consectetur fugiat ad Lorem non voluptate ullamco commodo veniam.\r\n"
    //     },
    //     {
    //       _id: "647ea2c6b796b144d04b1571",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Ramirez Cote",
    //       description: "Do nisi velit cupidatat cupidatat cillum fugiat fugiat. Ea eiusmod laborum fugiat labore ex est sint dolor eiusmod laboris reprehenderit velit. Labore eiusmod cupidatat magna enim velit esse laborum occaecat ex. Ad tempor ipsum dolor proident et aliqua nisi laboris voluptate ipsum voluptate enim culpa. Occaecat sint irure sint Lorem voluptate consequat enim veniam quis reprehenderit. Tempor et proident consequat ex amet magna sint.\r\n"
    //     },
    //     {
    //       _id: "647ea2c60c9cf7a08a021c5e",
    //       picture: "https://t3.ftcdn.net/jpg/05/71/38/68/360_F_571386815_hp4pbWbtEP0rasFvFIhldADkBOhfGpqz.jpg",
    //       name: "Lesa Hubbard",
    //       description: "Amet sint enim pariatur occaecat consequat consectetur aliqua dolore. Ut tempor ea irure sunt anim excepteur officia. Amet nisi pariatur qui voluptate eiusmod. Deserunt Lorem qui reprehenderit ut quis excepteur irure. Aliqua proident labore minim culpa consequat nisi ullamco sunt labore pariatur. Irure exercitation cillum deserunt nostrud.\r\n"
    //     }
    //   ];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-7'>
            {
                reviews.map(singleReview => <Review
                key={singleReview._id}
                singleReview={singleReview}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;