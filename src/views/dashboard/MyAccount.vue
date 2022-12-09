
<template>
    <div class="container">
        <div class="columns">
            <div class="column is-multiline">
                <h1 class="title">My account</h1>
            </div>
        </div>
        <div class="column is-12">
            <button @click="logout()" class="button is-danger">Log Out</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        name :'MyAccount',
        
        methods: {
            //i use async because i want to use code after the axios post is finished
            async logout(){
                //await because the code will not continue before i get the response back from the server 
                await axios
                    .post('/api/v1/token/logout/')
                    .then(response =>{
                        console.log("Logged out")
                        return response
                    })
                    .catch(error =>{
                        console.log(JSON.stringify(error))
                    })
                axios.defaults.headers.common['Authorization'] = ''
                localStorage.removeItem('token')
                this.$store.commit('removeToken')
                this.$router.push('/')
            }
        }
    }
</script>