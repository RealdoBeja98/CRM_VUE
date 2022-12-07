<!--template tag is the html code that goes for this component-->
<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <strong>CRM VUE</strong>
            </router-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                            <router-link to="/sign-up" class="button is-success">
                                <strong>Sign Up</strong>
                            </router-link>
                            <router-link to="/log-in" class="button is-light">
                                Log In
                            </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name: 'Nav-bar'
    }
</script>