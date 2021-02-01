<template>
  <div class="slider-line">
    <div class="slider-round" :style="`left: ${position}%`"></div>
  </div>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            isMove: false,
            startX: 0,
        }
    },
    props: ['position'],
    methods: {
        roundDragStartHandler(e) {
            console.log('start')
            this.startX = e.clientX;
            this.isMove = true;
        },
        roundDragEndHandler() {
            console.log('end')
            this.isMove = false;
        },
        roundMoveHandler(e) {
            if(this.isMove) {
                const sliderWidth = document.querySelector('.slider-line').offsetWidth;
                const newPosition = this.position + (e.clientX - this.startX) / sliderWidth * 100
                if(newPosition >= 0 && newPosition <= 100) {
                    //this.position = newPosition;
                    this.$emit('update', newPosition)
                }
                this.startX = e.clientX;
                console.log('move', e)
            }
        }
    },
    mounted() {
        window.addEventListener('mousemove', this.roundMoveHandler);
        window.addEventListener('mousedown', this.roundDragStartHandler);
        window.addEventListener('mouseup', this.roundDragEndHandler);
    }
}
</script>

<style>
    .slider-line{
        height: 5px;
        width: 100%;
        background: #bcd2e0;
        margin: 50px auto;
        position: relative;
        border-radius: 6px;
        cursor: pointer;
    }
    .slider-round{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #2583C1;
        position: absolute;
        top: -5px;
        left: 0;
    }
</style>