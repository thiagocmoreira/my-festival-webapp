<template>
  <a class="buttons column no-wrap" :class="{ 'animate-pop': !animateNone }">
    <button :class="{ 'dark': dark }" class="blob-btn">
      {{ label }}
      <slot name="content" />
      <span :class="{ 'dark': dark }" class="blob-btn__inner">
        <span class="blob-btn__blobs">
          <span
            v-for="n in 4"
            :key="n"
            :class="{ 'dark': dark }"
            class="blob-btn__blob"
          />
        </span>
      </span>
    </button>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
          <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
        </filter>
      </defs>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'BubbleButton',
  props: {
    label: String,
    dark: {
      type: Boolean,
      default: false
    },
    animateNone: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  text-align: center;
  border-radius: 15px;
  height: 54px;
  text-decoration: none;
  max-width: 400px;
}

$color: rgb(36, 36, 36);
$secColor: #FFFFFF;
$borderW: 2px;

.blob-btn {
  $numOfBlobs: 4;
  z-index: 1;
  position: relative;
  padding: 15px 40px;
  text-align: center;
  text-transform: uppercase;
  color: $color;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius:45px;

  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // border: $borderW solid $color;
    border-radius:45px;
  }

  &:after {
    content: "";
    z-index: -2;
    position: absolute;
    left: $borderW*1.5;
    top: $borderW*1.5;
    width: 100%;
    height: 100%;

    transition: all 0.3s 0.2s;
    border-radius:45px;
  }

  &:hover {
    color: $secColor;
    border-radius:45px;

    &:after {
      transition: all 0.3s;
      left: 0;
      top: 0;
      border-radius:45px;
    }
  }

  &.dark {
    color: $secColor;

    // &:before {
    //   border: $borderW solid $color;
    // }

    &:hover {
      color: $color;
    }
  }

  &__inner {
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius:45px;
    background:$secColor;

    &.dark {
      background: $color;
    }
  }

  &__blobs {
    position: relative;
    display: block;
    height: 100%;
    filter: url('#goo');
  }

  &__blob {
    position: absolute;
    top: $borderW;
    width: 100% / $numOfBlobs;
    height: 100%;
    background: $color;
    border-radius: 100%;
    transform: translate3d(0,150%,0) scale(1.7);
    transition: transform 0.45s;

    &.dark {
      background: $secColor;
    }

    @supports(filter: url('#goo')) {
      transform: translate3d(0,150%,0) scale(1.4);
    }

    @for $i from 1 through $numOfBlobs {
      &:nth-child(#{$i}) {
        left: ($i - 1) * (120% / $numOfBlobs);
        transition-delay: ($i - 1) * 0.08s;
      }
    }

    .blob-btn:hover & {
      transform: translateZ(0) scale(1.7);
      @supports(filter: url('#goo')) {
        transform: translateZ(0) scale(1.4);
      }
    }
  }
}
</style>
