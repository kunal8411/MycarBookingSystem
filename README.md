# MycarBookingSystem


1)To get all cabs registered on our device:
http://localhost:8000/users/showallcabs

2)To search for nearby cab:
http://localhost:8000/search?lattitude={number}&longitude={number}&color={colorName}

3)To book the nearby cab:
http://localhost:8000/book?id={Number}&origin={String}&destination={Destination}&userid={id_of_user}

4)To see all the users:
http://localhost:8000/users/showuser

5)To see all previous bookings: First check the all users, copy the id of user, whos's previous bookings we want to see, and pass this id  
http://localhost:8000/mybookings?userid={id_of_user}
