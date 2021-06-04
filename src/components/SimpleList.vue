<template>
<table class="table table-striped table-inverse table-responsive">
    <thead class="thead-inverse">
        <tr>
            <th>Name</th>
            <td>Email</td>
            <td>Phone</td>
            <td>Department</td>
        </tr>
        </thead>
        <tbody>
            <tr v-for="person in people" :key="person.id">
                <td>{{ person.name }}</td>
                <td>{{ person.email }}</td>
                <td>{{ person.phone }}</td>
                <td>{{ person.department }}</td>
            </tr>
        </tbody>
</table>
  
</template>

<script>
export default {
    name: 'simple-list',
    data(){
        return{
            people:[]
        }
    },
    created(){
        fetch(" http://localhost:3000/people")
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            this.people = data;
        })
    }

}
</script>

<style>
.td{
    padding:8px;
}

</style>