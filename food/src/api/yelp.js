import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ABZIt93URKiGwpHliFn1GSyR39sGvJDP4CveCUpkXvAldQ8VNCQMM4PWGt-R50KwvCNQ3oiImVB3lhTcMwWjECLFCPqHzmMYlMP1cwsm4qq7RpIV6AzdQnAMBYd6XXYx'
    }
});