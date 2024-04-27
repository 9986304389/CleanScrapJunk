// // Import any necessary modules
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import useApi from '../../apiCalls/ApiCalls';
// // Function to make API call
// const callAPI = async () => {
//     const { loading, error, get, fetchData, post, remove } = useApi();
//     const jwtToken = useSelector((state) => state.auth.token);
//     const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
//     const user = useSelector((state) => state.profile.user);

//     // Make your API call here
//     try {
//         const queryParameters = {
//             customer_id: phoneNumber, // Add your product code parameter value here

//         };
// console.log("oye")
//         // Convert query parameters to string
//         const queryString = new URLSearchParams(queryParameters).toString();
//         // Construct the complete URL with query parameters
//         const url = `https://clean-scrap-jnck-backend.vercel.app/api/getProductsByUser?${queryString}`;

//         const response = await get(url, jwtToken);


//         if (response?.status == true) {

//             if (response.result.length !== 0) {

//                 try {

//                     let data = {
//                         "userdetails": user,
//                         "orderdetails": response.result,
//                         "totalAmount": totalAmount,
//                         "address": selectAddress,
//                     }

//                     console.log(data)

//                     const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/sendPlaceorderemail', data, jwtToken)

//                     if (response?.status === true) {
//                         console.log("order placed successfully")
//                     }
//                     else {

//                     }

//                 } catch (err) {
//                     console.error('add data:', error);
//                 }
//             }
//         }


//     } catch (error) {
//         console.error('Error fetching initial data:', error);
//         // Handle error if needed
//     }
// };

// const MidnightAPIComponent = () => {
//     console.log("kavitha")
//     useEffect(async () => {
//         await callAPI();
//         //     // Calculate time until midnight
//         //     const now = new Date();
//         //     const midnight = new Date();
//         //     midnight.setHours(24, 0, 0, 0); // Set time to midnight

//         //     const timeUntilMidnight = midnight.getTime() - now.getTime();

//         //     // Set timeout to trigger API call at midnight
//         //     const timeout = setTimeout(() => {
//         //         callAPI();
//         //         // Set timeout again for the next midnight
//         //         setTimeout(callAPI, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
//         //     }, timeUntilMidnight);

//         //     // Clean up timeout on component unmount
//         //     return () => clearTimeout(timeout);
//     }, []); // Run effect only once on component mount

//     return null; // This component doesn't render anything
// };

// export default MidnightAPIComponent;


import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useApi from '../../apiCalls/ApiCalls';

const MidnightAPIComponent = () => {
    const { get, post } = useApi();
    const jwtToken = useSelector((state) => state.auth.token);
    const phoneNumber = useSelector((state) => state.profile.user.phoneNumber);
    const user_details = useSelector((state) => state.profile.user);

    useEffect(() => {
        const callAPI = async () => {

            try {
                const queryParameters = {
                    customer_id: phoneNumber,
                };
                console.log("oyee", user_details)
                const queryString = new URLSearchParams(queryParameters).toString();
                const url = `https://clean-scrap-jnck-backend.vercel.app/api/getProductsByUser?${queryString}`;
                let data_result = await get(url, jwtToken);
                console.log(data_result?.result.length)
                if (data_result?.status === true && data_result?.result.length !== 0) {
                    console.log("hello,", data_result.result)
                    let location = {}
                    location.address_line1 = user_details.location;

                    let data = {
                        userdetails: user_details,
                        orderdetails: data_result.result,
                        totalAmount: '0', // Ensure totalAmount and selectAddress are defined
                        address: location,
                    };

                    console.log(data)
                    const response = await post('https://clean-scrap-jnck-backend.vercel.app/api/sendPlaceorderemail', data, jwtToken);

                    if (response?.status === true) {
                        console.log("Order placed successfully");
                    } else {
                        console.log("Order placement failed");
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error if needed
            }
        };

        // Calculate time until midnight
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0); // Set time to midnight

        const timeUntilMidnight = midnight.getTime() - now.getTime();

        // Call the API at midnight
        const timeout = setTimeout(() => {
            callAPI();

            // Schedule the function to run again every 24 hours
            const interval = setInterval(callAPI, 24 * 60 * 60 * 1000);

            // Clean up interval on component unmount
            return () => clearInterval(interval);
        }, timeUntilMidnight);

        // Clean up timeout on component unmount
        return () => clearTimeout(timeout);
    }, []); // Run effect only once on component mount

    return null; // This component doesn't render anything
};

export default MidnightAPIComponent;

