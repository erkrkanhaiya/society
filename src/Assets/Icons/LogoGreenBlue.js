import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const LogoGreenBlue = props => (
  <Svg
    width={140}
    height={40}
    viewBox="0 0 200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path
        fill="#00C8A0"
        fillRule="nonzero"
        d="M46.834 17.166c4.302 0 7.18 3.163 7.18 7.949 0 4.7-2.792 7.806-7.066 7.806-1.966 0-3.561-.77-4.644-2.165v7.521h-5.07v-20.94h5.07v1.995c1.083-1.396 2.621-2.166 4.53-2.166zm18.69 0c4.302 0 7.179 3.163 7.179 7.949 0 4.7-2.792 7.806-7.065 7.806-1.966 0-3.562-.77-4.644-2.165v7.521h-5.072v-20.94h5.072v1.995c1.082-1.396 2.62-2.166 4.53-2.166zm-41.881.171v8.29c0 1.739.968 2.793 2.478 2.793C27.916 28.39 29 26.967 29 24.944v-7.607h5.071V32.75h-5.071v-2.507c-1.054 1.795-2.735 2.707-4.929 2.735-3.333 0-5.498-2.308-5.498-5.897v-9.744h5.07zm86.983-3.533v4.274h3.989v3.362h-3.989v5.812c0 1.14.513 1.652 1.396 1.624.513 0 1.168-.2 1.909-.513l.969 3.59c-1.112.655-2.65 1.025-4.16 1.025-2.991.029-5.157-1.738-5.157-4.929v-6.61h-2.136v-3.361h2.136v-4.274h5.043zM9.231 12.551c2.934 0 5.897.912 7.977 2.25l-1.966 4.132c-2.108-1.197-4.786-2.137-6.439-2.137-1.253 0-2.08.456-2.08 1.367 0 3.305 10.513 1.425 10.513 8.604 0 4.074-3.59 6.154-8.034 6.154-3.333 0-6.809-1.225-9.202-3.19l2.023-4.075c2.051 1.767 5.156 3.02 7.236 3.02 1.539 0 2.507-.57 2.507-1.624 0-3.39-10.512-1.339-10.512-8.404 0-3.732 3.162-6.097 7.977-6.097zm72.39 4.615c5.07 0 8.432 3.134 8.432 7.863 0 4.758-3.362 7.892-8.433 7.892-5.07 0-8.404-3.134-8.404-7.892 0-4.729 3.333-7.863 8.404-7.863zm20.202-.028v4.644c-2.821-.285-4.701.968-4.958 3.105v7.863h-5.07V17.337h5.07v2.564c1.054-1.766 2.792-2.763 4.958-2.763zm-20.203 4.13c-1.966 0-3.305 1.54-3.305 3.818 0 2.308 1.34 3.847 3.305 3.847 1.995 0 3.334-1.539 3.334-3.847 0-2.279-1.34-3.817-3.334-3.817zm-36.04-.113c-1.937 0-3.276 1.567-3.276 3.846 0 2.28 1.34 3.818 3.277 3.818 1.994 0 3.333-1.539 3.333-3.818 0-2.28-1.339-3.846-3.333-3.846zm18.69 0c-1.937 0-3.276 1.567-3.276 3.846 0 2.28 1.339 3.818 3.276 3.818 1.994 0 3.333-1.539 3.333-3.818 0-2.28-1.339-3.846-3.333-3.846z"
      />
      <Path
        fill="#491F69"
        fillRule="nonzero"
        d="M146.355 17.199c5.072 0 8.434 3.134 8.434 7.865 0 4.758-3.362 7.893-8.434 7.893-5.072 0-8.406-3.135-8.406-7.893 0-4.73 3.334-7.865 8.406-7.865zm17.325 0c5.072 0 8.435 3.134 8.435 7.865 0 4.758-3.363 7.893-8.435 7.893-5.072 0-8.406-3.135-8.406-7.893 0-4.73 3.334-7.865 8.406-7.865zm-35.277-4.389c5.3 0 8.32 2.565 8.32 7.01 0 3.02-1.253 5.244-3.562 6.44l4.16 6.526h-5.898l-2.906-5.528h-3.876v5.528h-5.214V12.81zm66.024 4.36c3.334 0 5.528 2.28 5.528 5.899v9.717h-5.072v-8.264c0-1.767-.97-2.82-2.537-2.82-1.795.028-2.906 1.452-2.906 3.476v7.608h-5.072v-8.264c0-1.767-.97-2.82-2.536-2.82-1.796.028-2.935 1.452-2.935 3.476v7.608h-5.044V17.37h5.044v2.536c1.054-1.795 2.792-2.736 5.015-2.736 2.507 0 4.36 1.283 5.129 3.448.997-2.28 2.878-3.448 5.386-3.448zm-48.072 4.132c-1.966 0-3.306 1.539-3.306 3.819 0 2.308 1.34 3.846 3.306 3.846 1.994 0 3.334-1.538 3.334-3.846 0-2.28-1.34-3.819-3.334-3.819zm17.325 0c-1.966 0-3.305 1.539-3.305 3.819 0 2.308 1.339 3.846 3.305 3.846 1.995 0 3.334-1.538 3.334-3.846 0-2.28-1.34-3.819-3.334-3.819zm-35.249-4.331h-3.79v6.126h3.79c2.109 0 3.334-1.082 3.334-3.106 0-1.966-1.225-3.02-3.334-3.02z"
      />
      <Path
        fill="#491F69"
        d="M149.939 9.224c.06 1.463.404 3.407 1.594 4.325 1.55 1.197 4.346.99 6.856.99.992 0 1.945-.117 2.83-.333-.172.383-.404.72-.716.96-1.13.873-3.169.723-5 .723a8.63 8.63 0 01-2.322-.312l-.925 1.858s-.868-1.243-1.447-2.189c-.7-1.144-1.476-2.594-1.476-3.602 0-.809.157-1.689.606-2.42z"
      />
      <Path
        fill="#00C8A0"
        d="M163.315 13.213c-.982.275-3.226.427-4.352.427-2.51 0-5.306.206-6.856-.99-1.333-1.03-1.604-3.345-1.604-4.83 0-1.76.278-3.708 2.077-4.775 1.482-.88 4.273-1.045 6.383-1.045 2.175 0 5.894.157 7.393 1.086 1.72 1.066 2.235 3.018 2.235 4.734 0 1.382-1.359 4.062-2.166 5.306a41.432 41.432 0 01-1.842 2.634l-1.268-2.547z"
      />
    </G>
  </Svg>
)

export default LogoGreenBlue
