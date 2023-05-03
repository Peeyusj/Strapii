import React from 'react'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    
    <div className='navbar1'>
   <div className='rights' style={{display:'flex'}}>
    <div>
    <svg width="31" height="43" viewBox="0 0 31 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0477 0.916612C10.817 0.949432 10.512 1.00319 10.3697 1.03621C10.2276 1.06913 10.0946 1.08595 10.0743 1.07346C10.0541 1.06088 10.0376 1.06782 10.0376 1.08887C10.0376 1.1233 9.87539 1.1695 9.6526 1.1986C9.607 1.20454 9.45115 1.26535 9.30639 1.33381C9.16162 1.40216 9.0254 1.45814 9.00366 1.45814C8.93007 1.45814 8.46636 1.66019 8.39609 1.72291C8.35763 1.75724 8.08148 1.94007 7.78248 2.12913C7.12347 2.54582 6.80866 2.79741 6.25344 3.35051C6.02018 3.58287 5.80645 3.7677 5.77846 3.76136C5.75037 3.75492 5.73225 3.76418 5.73799 3.7818C5.74826 3.81301 5.48912 4.19647 5.45781 4.19647C5.44915 4.19647 5.45499 4.17553 5.4708 4.14996C5.48882 4.12077 5.48187 4.11443 5.45197 4.13285C5.4258 4.14906 5.40949 4.19265 5.41553 4.2297C5.42197 4.26826 5.40385 4.29242 5.37335 4.28607C5.34405 4.28003 5.33157 4.29363 5.34556 4.31628C5.35956 4.33903 5.34888 4.35755 5.3217 4.35755C5.29452 4.35755 5.28314 4.36833 5.29633 4.38151C5.30952 4.3947 5.24197 4.51984 5.14623 4.65968C5.05049 4.79951 4.933 5.01858 4.88518 5.14654C4.83726 5.27439 4.7546 5.47413 4.70145 5.59031C4.60812 5.79448 4.52094 6.09599 4.45822 6.43144C4.4106 6.68645 4.40587 6.72893 4.37577 7.1865C4.36006 7.42459 4.33187 7.6194 4.31315 7.6194C4.29432 7.6194 4.27902 8.03729 4.27902 8.54802C4.27902 9.15679 4.29291 9.46797 4.31929 9.45167C4.34536 9.43556 4.35956 9.61979 4.35956 9.97517C4.35956 10.3319 4.34546 10.5148 4.31909 10.4986C4.29211 10.4819 4.27882 13.8915 4.27902 20.775L4.27932 31.0765L4.0073 31.0677C2.45329 31.0174 1.68938 31.0123 1.64941 31.0523C1.62505 31.0767 1.55629 31.0966 1.49659 31.0966C1.05533 31.0966 0.53676 31.4479 0.395615 31.8422C0.313263 32.0722 0.241785 33.3345 0.306116 33.4226C0.326452 33.4505 0.333398 33.5456 0.321519 33.634C0.308632 33.7303 0.316384 33.7947 0.340949 33.7947C0.363701 33.7947 0.374071 33.8487 0.364305 33.9155C0.35454 33.9819 0.361486 34.0363 0.379809 34.0363C0.398132 34.0363 0.413233 34.068 0.413233 34.1068C0.413434 34.1845 0.66522 34.3053 0.909858 34.3451C0.990196 34.358 1.04748 34.3822 1.03731 34.3988C1.00147 34.4567 1.42742 34.4819 2.37577 34.4777L3.33268 34.4735L3.34366 35.157L3.35473 35.8404L3.46447 35.9128C3.52487 35.9525 3.60611 35.9876 3.64507 35.9906C3.68404 35.9936 3.75652 36.034 3.80615 36.0803C3.91971 36.1863 4.2461 36.3158 4.49285 36.3527C4.59675 36.3683 4.68172 36.3937 4.68172 36.4092C4.68172 36.4246 4.77021 36.4599 4.87843 36.4877C4.98746 36.5156 5.11764 36.5837 5.17039 36.6403C5.22274 36.6966 5.44231 36.8316 5.65826 36.9402C5.8742 37.0489 6.05088 37.1537 6.05088 37.173C6.05088 37.2282 6.20582 37.2547 6.22706 37.2033C6.23955 37.1731 6.25757 37.1711 6.27942 37.1975C6.29764 37.2196 6.42952 37.2426 6.57238 37.2484C6.71533 37.2543 6.84218 37.2733 6.85426 37.2905C6.86645 37.3078 6.9489 37.3392 7.03749 37.3604C7.16243 37.3902 7.21589 37.4312 7.27589 37.5432C7.41089 37.7953 7.36861 37.8216 6.82738 37.8219C4.99612 37.8234 4.25244 38.1443 3.7385 39.1551C3.61497 39.3979 3.5138 39.6186 3.51369 39.6454C3.51359 39.6722 3.49457 39.7621 3.47151 39.8452L3.42953 39.9962H1.97882H0.528001L0.547834 41.0533C0.569378 42.1972 0.570285 42.211 0.623541 42.211C0.643374 42.211 0.649314 42.2275 0.63683 42.2478C0.624347 42.2679 0.683241 42.3586 0.767807 42.4492L0.921436 42.6139L13.6139 42.6136C21.9956 42.6133 26.3065 42.5996 26.3065 42.5733C26.3065 42.5494 26.4676 42.5332 26.7043 42.5332C27.0087 42.5332 27.1138 42.519 27.1522 42.4728C27.1798 42.4396 27.2245 42.4124 27.2516 42.4124C27.4172 42.4124 27.4289 42.3228 27.4369 41.0081C27.4457 39.5777 27.4653 39.657 27.1119 39.6977C26.6981 39.7453 23.122 39.7618 23.0672 39.7163C23.0363 39.6907 23.0073 39.5274 22.9935 39.3016C22.9584 38.7241 22.9589 38.7247 22.5346 38.6951C21.9815 38.6564 21.6765 38.5271 21.6549 38.3217C21.6504 38.2792 21.5991 38.1448 21.5407 38.023C21.4824 37.9012 21.4345 37.7471 21.4343 37.6807L21.434 37.5599L20.699 37.5708C19.8786 37.5828 19.8246 37.5705 19.9173 37.3912C20.0079 37.2159 20.0969 37.1583 20.2704 37.1629C20.3558 37.1651 20.4158 37.1511 20.4038 37.1319C20.3919 37.1126 20.4205 37.0968 20.4674 37.0968C20.5217 37.0968 20.5422 37.1137 20.524 37.1433C20.5061 37.1723 20.5129 37.1788 20.5424 37.1606C20.5683 37.1446 20.5791 37.1146 20.5663 37.094C20.5536 37.0732 20.5924 37.0377 20.6525 37.0147C20.7127 36.9919 20.8994 36.8334 21.0676 36.6625C21.3565 36.369 21.4726 36.1963 21.9171 35.397C22.1768 34.9304 22.9266 34.3294 23.1448 34.4131C23.1755 34.4248 23.2063 34.4175 23.2132 34.3969C23.2461 34.2994 23.9033 34.2744 25.4982 34.3102C27.0892 34.346 27.7943 34.323 27.9038 34.2321C27.9314 34.2092 27.9738 34.2026 27.9979 34.2175C28.0219 34.2324 28.0657 34.2246 28.0952 34.2002C28.1246 34.1757 28.1782 34.1671 28.2142 34.1809C28.2517 34.1953 28.2797 34.1858 28.2797 34.1589C28.2797 34.1329 28.3115 34.1157 28.3502 34.1205C28.389 34.1253 28.4479 34.1187 28.4811 34.106C28.5143 34.0932 28.614 34.0608 28.7026 34.0339C29.3731 33.8309 29.8207 33.3056 29.8351 32.7048C29.8423 32.4008 29.735 32.0228 29.6414 32.0228C29.6207 32.0228 29.6135 32.0074 29.6251 31.9885C29.6368 31.9696 29.6197 31.9197 29.5871 31.8777C29.5295 31.8034 29.5286 31.8035 29.5541 31.8819C29.5724 31.9381 29.5299 31.9145 29.4132 31.8032C29.2403 31.6383 29.2103 31.5968 29.2965 31.6414C29.3242 31.6557 29.3021 31.631 29.2473 31.5865C29.1925 31.542 29.137 31.5123 29.1238 31.5204C29.1106 31.5286 29.0744 31.5 29.0434 31.4569C29.0122 31.4137 28.9656 31.3785 28.9398 31.3785C28.9139 31.3785 28.85 31.3408 28.7976 31.2949C28.7454 31.2489 28.7297 31.2252 28.763 31.2422C28.8147 31.2688 28.8156 31.2635 28.7687 31.2057C28.6812 31.0978 28.4868 31.0683 28.0985 31.1039C27.5418 31.1549 19.7833 31.096 19.7808 31.0406C19.7797 31.0161 19.7739 25.9038 19.7678 19.6802C19.7618 13.4565 19.7455 8.28284 19.7314 8.18317C19.7174 8.0835 19.6946 7.90229 19.6808 7.78047C19.643 7.44926 19.4987 6.71917 19.462 6.67306C19.4442 6.65091 19.4167 6.56936 19.4007 6.49185C19.3565 6.27711 19.0923 5.46769 19.059 5.44483C19.0429 5.43376 18.9893 5.31597 18.94 5.18308C18.8907 5.05019 18.8157 4.90925 18.7734 4.86988C18.731 4.83042 18.6664 4.73981 18.6297 4.66844C18.5403 4.49457 18.1153 3.85881 18.0237 3.76207C17.9835 3.71958 17.869 3.58015 17.7694 3.45229C16.9035 2.34125 15.0453 1.21833 13.7028 0.994734C13.6036 0.978224 13.498 0.935236 13.4683 0.899295C13.4386 0.863355 13.4272 0.858925 13.4429 0.889329C13.4657 0.933625 13.44 0.939767 13.315 0.919934C12.9337 0.859529 11.4639 0.857415 11.0477 0.916612ZM13.3397 1.95456C15.4033 2.4228 16.9484 3.60884 17.9391 5.4851C18.0618 5.71766 18.1948 5.99854 18.2346 6.10928C18.2742 6.22003 18.3193 6.32875 18.3347 6.3509C18.4347 6.49456 18.5965 7.20542 18.6597 7.77846C18.7075 8.21186 18.7544 16.9508 18.7552 25.6199L18.7558 31.0765H15.796H12.8363V23.9689V16.8613L13.2765 16.8319C13.8054 16.7967 13.7925 16.8074 13.815 16.379L13.833 16.0358L13.6367 16.0343C13.3164 16.032 12.7294 15.9295 12.6913 15.8693C12.6525 15.8081 12.6429 15.018 12.6794 14.8823C12.7072 14.7785 12.7841 14.7605 13.4387 14.7036C14.2115 14.6365 14.2966 14.5126 14.0102 13.8712C13.7397 13.2655 13.1786 11.4373 13.1786 11.1616C13.1786 11.1425 13.6218 11.1214 14.1633 11.1148L15.1481 11.1027L15.3094 10.9452C15.4135 10.8435 15.5953 10.5509 15.8226 10.1196C16.2098 9.38482 16.3597 9.15286 16.6496 8.83997C16.8965 8.57328 16.8943 8.53634 16.5991 8.02209C15.9571 6.9035 15.9099 6.73658 16.01 5.93814C16.1199 5.06127 16.0891 4.98123 15.727 5.20191C15.6113 5.27258 15.5353 5.37326 15.2097 5.8878C15.1606 5.96532 15.0726 6.15559 15.014 6.31063C14.9554 6.46567 14.892 6.62081 14.8731 6.65534C14.7471 6.88468 14.6983 7.66641 14.7587 8.48519L14.7884 8.88789L14.356 9.0985C13.8823 9.32915 13.6652 9.38824 13.239 9.40213L12.9571 9.4114L12.9435 9.2919C12.9109 9.00487 13.0223 8.68574 13.4499 7.84088C13.9955 6.76306 14.0001 6.72501 13.6487 6.202C13.3614 5.77464 13.1068 5.18167 12.7788 4.17634C12.4351 3.12248 12.296 2.74667 12.1986 2.60824L12.1153 2.48995L11.968 3.07798C11.887 3.40145 11.8065 3.69935 11.7893 3.74002C11.772 3.78069 11.6902 4.07667 11.6077 4.39782C11.4295 5.09036 11.2437 5.4989 10.8257 6.11734C10.413 6.72793 10.4164 6.78924 10.9241 7.88115C11.1653 8.39982 11.2359 8.57781 11.2846 8.78923C11.3125 8.90994 11.3494 9.04595 11.3666 9.09155C11.5172 9.48972 11.0255 9.61103 10.3138 9.35129C9.42085 9.02541 9.27286 8.74242 9.51045 7.81501C9.85999 6.45037 9.67234 5.98958 8.51962 5.38242C7.99581 5.10647 7.99299 5.10717 8.08299 5.49326C8.32068 6.51319 8.1143 7.52637 7.50251 8.34274C7.2023 8.74332 7.20209 8.80866 7.50079 9.24196C8.61737 10.8615 9.02057 11.1149 10.4909 11.1207L11.0047 11.1229L10.9876 11.3141C10.9556 11.6741 10.6942 12.7082 10.6033 12.8343C10.5873 12.8565 10.5319 12.9924 10.4801 13.1363C10.4284 13.2803 10.3277 13.5249 10.2563 13.68C9.8754 14.5077 9.94395 14.6509 10.7323 14.6753C11.3104 14.6933 11.3789 14.7504 11.4008 15.234C11.4299 15.8743 11.3607 15.9669 10.7906 16.0514C10.4232 16.1058 10.4014 16.1288 10.4006 16.4637C10.3998 16.8008 10.4233 16.8151 11.0195 16.8404L11.5074 16.8613V23.9689V31.0765L8.48227 31.0868C5.98686 31.0953 5.44926 31.0876 5.41211 31.0429C5.34395 30.9608 5.25224 7.19576 5.31858 6.80887C5.62111 5.04476 7.8602 2.82408 9.95704 2.20856C10.1453 2.15339 10.3559 2.08775 10.425 2.06289C10.9744 1.86516 12.6682 1.80214 13.3397 1.95456ZM12.3632 5.21792C12.5319 5.3054 12.9875 6.20946 13.0778 6.63561C13.1923 7.17583 13.1512 7.35784 12.769 8.00578C12.4817 8.49254 12.4135 8.65412 12.4135 8.84692C12.4135 9.2029 12.1862 8.97618 11.7461 8.18136C11.0711 6.9622 11.0557 6.62232 11.6322 5.67004C11.9395 5.16244 12.084 5.07304 12.3632 5.21792ZM8.86513 6.127C9.43334 6.41694 9.49948 7.21469 9.05178 8.37818C8.81962 8.98132 8.83624 9.01112 9.62613 9.41049C9.79707 9.49697 10.0788 9.64808 10.2521 9.74654C10.5522 9.91688 10.5868 9.92655 10.977 9.9503L11.3866 9.97517L11.3985 10.2473C11.4142 10.6051 11.4088 10.6071 10.4201 10.614C9.24799 10.6224 9.00285 10.4824 8.07202 9.27267C7.71392 8.80725 7.70838 8.88447 8.14833 8.2026C8.41602 7.78782 8.50733 7.5005 8.50733 7.07344C8.50733 6.07747 8.54952 5.96602 8.86513 6.127ZM15.5521 6.7234C15.6246 6.96149 15.7671 7.39187 15.8689 7.6798C16.1648 8.51711 16.1123 8.87017 15.5962 9.51207C14.928 10.3432 14.7339 10.4544 13.9236 10.4701C12.8567 10.4907 12.7395 10.4494 12.8728 10.1003C12.9572 9.87913 13.0512 9.8296 13.708 9.66006C14.0995 9.55898 14.389 9.45318 14.7147 9.292C15.3932 8.95635 15.3445 9.0244 15.258 8.53462C15.0297 7.23995 15.0133 6.87773 15.1724 6.64366C15.2279 6.56181 15.291 6.44886 15.3123 6.39268C15.3774 6.22143 15.4149 6.27308 15.5521 6.7234ZM12.3107 11.3857C12.5549 11.572 12.6783 11.8099 12.8173 12.363C13.2391 14.0405 13.1973 14.1429 12.0913 14.1427C11.0207 14.1426 10.9106 14.0267 11.2202 13.2252C11.3825 12.8049 11.3932 12.7566 11.4483 12.1936C11.4971 11.696 11.5134 11.6528 11.7437 11.4118C11.9382 11.2083 12.0702 11.2023 12.3107 11.3857ZM12.2846 15.1176C12.3561 15.1891 12.3431 15.5118 12.2624 15.6723C12.1709 15.8543 11.9087 15.9695 11.8302 15.8622C11.7416 15.741 11.7163 15.2305 11.7947 15.1439C11.8733 15.0571 12.2062 15.0392 12.2846 15.1176ZM12.494 23.9705V31.0998L12.1618 31.0882L11.8296 31.0765L11.8192 24.0091C11.8136 20.1221 11.8175 16.9192 11.8281 16.8915C11.8412 16.857 11.9489 16.8411 12.1706 16.8411H12.494V23.9705ZM18.6288 20.0426C18.629 20.2198 18.6361 20.2872 18.6445 20.1925C18.6531 20.0979 18.653 19.9529 18.6443 19.8703C18.6357 19.7879 18.6287 19.8654 18.6288 20.0426ZM28.568 32.1873C28.8018 32.3125 28.8975 32.825 28.7494 33.1593C28.588 33.5236 28.9156 33.4912 25.2557 33.5036L22.0023 33.5146L21.9812 33.6848C21.9164 34.2059 21.8749 34.5512 21.8664 34.6403C21.8542 34.7675 21.5663 34.8739 21.2215 34.8787C20.9533 34.8825 20.952 34.8842 20.8732 35.3414C20.7678 35.9529 20.5611 36.139 19.9355 36.1852C19.3369 36.2294 19.2007 36.39 19.1114 37.1572C19.0481 37.7012 19.0678 37.8717 19.1989 37.9139C19.2654 37.9352 19.356 37.9846 19.4003 38.0238C19.6197 38.2174 19.886 38.3077 20.3486 38.3453C20.837 38.385 20.8478 38.3908 20.8863 38.6316C20.9244 38.87 21.1151 39.0522 21.536 39.2529C21.97 39.4598 22.1493 39.6269 22.3535 40.0151C22.5581 40.4042 22.7154 40.4869 23.3668 40.5473C23.7501 40.5829 24.8125 40.5801 25.2595 40.5424C26.6435 40.4256 26.7495 40.4765 26.7495 41.2581C26.7495 41.5702 26.7879 41.5485 26.0887 41.6322C25.4546 41.708 26.2289 41.7059 12.2121 41.6703C2.16164 41.6449 1.2749 41.6374 1.22859 41.5769C1.14463 41.4672 1.16487 41.0711 1.26061 40.9494C1.3932 40.7809 1.55669 40.7618 2.87381 40.7615L4.10636 40.7613L4.12881 40.4641C4.15912 40.0636 4.29956 39.7775 4.64336 39.4164C5.24066 38.7891 5.80272 38.6276 7.44019 38.613L8.12477 38.6069V37.5265V36.4459L7.33821 36.4507C6.07042 36.4583 5.75762 36.3341 5.28949 35.637C5.21891 35.5318 5.14834 35.4434 5.13284 35.4405C5.11723 35.4377 4.83273 35.4241 4.5005 35.4103L3.89646 35.3853L3.87511 34.6202C3.84481 33.5352 3.87511 33.5632 2.79106 33.6168C1.28547 33.6912 1.22014 33.658 1.21913 32.8163C1.21853 32.3653 1.22356 32.3363 1.31739 32.2425L1.41625 32.1436H14.9513C24.6021 32.1436 28.5098 32.1562 28.568 32.1873ZM16.8531 35.9318C16.7353 36.0371 16.6003 36.089 16.1372 36.2078C15.7719 36.3016 15.7283 36.6136 16.0805 36.6136C16.3746 36.6136 16.2916 36.781 15.8238 37.1309C15.14 37.6425 14.4774 37.9306 14.2808 37.8018C13.9835 37.607 13.9145 36.814 14.1829 36.6753C14.4408 36.5419 14.6859 36.6476 14.755 36.922C14.8113 37.1458 14.8855 37.1005 14.9525 36.8015C15.0559 36.3393 14.9495 36.2011 14.4672 36.1715C14.1392 36.1514 14.1243 36.1462 14.1115 36.0498C14.0888 35.8807 14.0445 35.8803 13.91 36.0478C13.7623 36.2315 13.6477 36.2712 13.1443 36.3129L12.8079 36.3408L12.8322 36.462C12.8456 36.5288 12.8565 36.652 12.8565 36.7359V36.8885L12.9783 36.8425C13.2258 36.7491 13.3365 37.0268 13.1364 37.2397C12.6964 37.7082 10.3816 38.2295 9.89009 37.9708C9.73908 37.8913 9.59461 37.7188 9.59461 37.618C9.59461 37.1993 11.1786 36.445 12.2462 36.3552C12.6364 36.3225 12.6954 36.2881 12.6954 36.0936C12.6954 35.7524 12.2857 35.7554 11.2254 36.1044C9.68985 36.61 9.0695 37.2653 9.43464 37.9964C9.6217 38.3709 9.60619 38.3659 10.5544 38.3608C12.1003 38.3523 13.0458 38.0263 13.4328 37.3685C13.7107 36.896 13.8228 36.9256 13.8231 37.4717C13.8235 38.192 13.9348 38.3687 14.3668 38.3348C14.8464 38.297 15.265 38.0276 16.2732 37.1076C16.9196 36.5178 16.9437 36.5208 16.8965 37.1851C16.8531 37.7964 17.0146 38.1033 17.3798 38.1037C17.6051 38.104 17.9074 37.9911 18.0332 37.8597L18.1358 37.7526L18.0493 37.6059C17.9557 37.4472 17.9102 37.4313 17.7962 37.5177C17.3597 37.8485 17.0186 37.575 17.0308 36.9037C17.0386 36.4746 17.4165 36.2995 17.6136 36.6337C17.7129 36.802 17.7068 36.8011 17.8763 36.6719C18.237 36.3968 17.963 36.0213 17.4189 36.0451C17.1343 36.0576 17.1274 36.0556 17.0554 35.9372L16.9821 35.8166L16.8531 35.9318Z" fill="white" stroke="white" stroke-width="0.56"/>
</svg>    </div>

<div className='right-b' style={{display:'flex',flexDirection:"column"}}>
    <div>SANDEEPANY HIMALAYAS </div>
    <div>Sidhbari – Chinmaya Tapovan Trust</div>
</div>
   </div>
   <div className="lefts">
    <a href="">Home</a><a href="">About us</a><a href="">Attrection</a><a href="">Exploration</a><a href="">Donate</a><a href="">News</a><a href="">Events</a>
   </div>
    </div>
  )
}

export default Navbar