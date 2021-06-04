<template>
  <div class="chat container">
    <h2 class="text-center text-primary">chat Aspire</h2>
    <div class="card w-50">
      <div class="card-body">
        <ul class="message" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="text-primary">{{ message.name }} </span>
            <span class="text-warning">{{ message.content }} </span>
            <span class="text-secondary time">{{ message.timestamp }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card mt-5 w-50">
      <NewMessage :name="name" />
    </div>
  </div>
</template>

<script>
import NewMessage from "../components/NewMessage.vue";
import db from "../firebase/init";
import moment from "moment";
export default {
  name: "VueChart",
  props: ["name"],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");
    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
  },
};
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.message li {
  list-style: none;
}
.message {
  max-height: 300px;
  overflow: auto;
}
.message::-webkit-scrollbar {
  width: 3px;
}
.message::-webkit-scrollbar-track {
  background: #ddd;
}
.message::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>