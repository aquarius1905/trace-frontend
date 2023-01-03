<template>
  <div>
    <TextMessage :msg="メール認証が完了しました"></TextMessage>
  </div>
</template>

<script>
import TextMessage from "@/components/TextMessage";
export default {
  components: { TextMessage }
};
</script>