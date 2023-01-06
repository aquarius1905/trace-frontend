<template>
  <div>
    <Message :msg="メール認証が完了しました"></Message>
  </div>
</template>

<script>
import Message from "@/components/MessageView";
export default {
  components: { Message }
};
</script>