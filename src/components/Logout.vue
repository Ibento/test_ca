<template>
    
</template>
<script>
export default {
    name: 'logout',
    beforeCreate() {
        sessionStorage.setItem('sessionID','');
        this.$router.push({ name: 'Login' });
    }
}
</script>