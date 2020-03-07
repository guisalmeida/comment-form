<template>
  <div class="container">
    <h1>Comentários</h1>
    <hr />

    <Form v-on:add-comment="addComment"></Form>

    <div class="list-group">
    <p v-if="comments.length <= 0">Sem comentários...</p>
      <div class="list-group-item" v-for="(comment, index) in allComments" v-bind:key="index">
        <span class="comment__author">
          Autor:
          <strong>{{comment.name}}</strong>
        </span>
        <p>{{ comment.message }}</p>
        <a href="#" class="delete" v-on:click.prevent="removeMessage(index)">Excluir</a>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import Form from './Form';

export default {
    components: {
        Form
    },
    data() {
        return {
            comments: []
        };
    },
    methods: {
        removeMessage(index) {
        this.comments.splice(index, 1);
        },
        addComment(comment){
            this.comments.push(comment);
        }
    },
    computed: {
        allComments() {
        return this.comments.map(comment => ({
            ...comment,
            name: comment.name.trim() === "" ? "Anonimo" : comment.name
        }));
        }
    },
    watch: {
        comments(val) {
        console.log("val", val);
        }
    }
};
</script>