export default {    async GET_PRODUCTS_FROM_API ({commit}) {        try {            const products = await fetch('https://random-data-api.com/api/commerce/random_commerce?size=6');            const responce = await products.json();            commit('SET_PRODUCTS_TO_STATE', responce)            return responce;        }        catch (err) {            console.error(err)            return err;        }    },}