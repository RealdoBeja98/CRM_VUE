<template>
<div class="container">
    <div class="columns is-12">
        <h1 class="title">{{ lead.title }}</h1>
        <router-link to="/" class="button is-light">
            Edit
        </router-link>
        <div class="column is-6">
            <div class="box">
                <h2>Details</h2>
                <p><strong>Status:</strong>{{lead.status}}</p>
                <p><strong>Priority:</strong>{{lead.priority}}</p>
                <p><strong>Confidence:</strong>{{lead.confidence}}</p>
                <p><strong>Estimated value:</strong>{{lead.estimated_value}}</p>
                <p><strong>Created at:</strong>{{lead.created_at}}</p>
                <p><strong>Modified at:</strong>{{lead.modified_at}}</p>
            </div>
        </div>
        <div class="column is-6">
            <div class="box">
                <h2>Contact information</h2>
                <p><strong>Email:</strong>{{lead.email}}</p>
                <p><strong>Phone:</strong>{{lead.phone}}</p>
                <p><strong>Website:</strong>{{lead.Website}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>

    export default{
        name: 'MyLead',
        data(){
            return {
                lead: {}
            }
        }
    }

</script>