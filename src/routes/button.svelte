<script>
    let className
    export { className as class};
</script>
<button class={`bg-color-3 p-[10px] rounded-lg text-white hover:bg-color-2 transition-all my-1 ${className}`}><slot /></button>