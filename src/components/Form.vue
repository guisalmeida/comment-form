<template>
    <div class="form-group">
      <p>
        <input placeholder="nome" type="text" name="author" class="form-control" v-model="name" />
      </p>
      <p>
        <textarea name="message" class="form-control" placeholder="Comentário" v-model="message"></textarea>
      </p>
      <button class="btn btn-primary" v-on:click="addComment">Comentar</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name: '',
                message: ''
            }
        },
        methods: {
            addComment() {
                if (this.message.trim() === "") {
                    return;
                }

                this.$emit('add-comment', {
                    name: this.name,
                    message: this.message
                });

                this.name = "";
                this.message = "";
            },
        }
    }
</script>