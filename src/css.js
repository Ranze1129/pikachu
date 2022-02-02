const string = `/*
* 首先，需要准备皮卡丘的皮
*/
.skin{
    background: #ffe600;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose{
    border: 8px solid red;
    border-color: black transparent transparent;
    border-bottom: none;
}
.yuan{
    position: absolute;
    width: 16px;
    height: 6px;
    top: -14px;
    left: -8px;
    border-radius: 15px 15px 0 0;
    background: black;
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye{
    border: 2px solid black;
    width: 54px;
    height: 54px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -27px;
    background: #2e2e2e;
    border-radius: 50%;
}
/*
 * 画里面的眼珠子
 */
.eyeball{
    border: 3px solid black;
    width:26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 1px;
}
/*
 * 左眼在左边，右眼在右边（废话）
 */
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
/*
 * 然后，画皮卡丘的嘴
 * 先画上嘴唇
 */
.mouth .up .lip{
    border: 3px solid black;
    height: 30px;
    width: 80px;
    border-top-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    background: #ffe600;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    border-right-color: transparent;
    transform: rotate(-30deg) translateX(-55px);
    left:50%;
    margin-left: -30px;
}

.mouth .up .lip.right{
    border-radius: 0 0  50px 0;
    border-left-color: transparent;
    margin-left: 50px;
    transform: rotate(30deg) translateX(55px);
}
/*
 * 再画下嘴唇
 */
.mouth .down .yuan1{
    border: 3px solid black;
    width: 128px;
    height: 600px;
    position: absolute;
    bottom: 29px;
    left: 50%;
    border-radius: 80px/300px;
    margin-left: -64px;
    background: #9b000a;
    overflow: hidden;
}
/*
 * 还有个小舌头
 */
.mouth .down .yuan1 .yuan2{
    width: 160px;
    height: 265px;
    position: absolute;
    bottom: -145px;
    left:50%;
    margin-left: -80px;
    background: #ff485f;
    border-radius: 150px/200px;
}
/*
 * 给皮卡丘画上腮红
 */
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 65px;
    height: 65px;
    top: 180px;
    margin-left: -35px;
    z-index: 3;
}
.face.left{
    transform: translateX(-140px);
    background: red;
    border-radius: 50%;
}
.face.right{
    transform: translateX(140px);
    background: red;
    border-radius: 50%;
}
/*
 * 还有皮卡丘的闪电
 */
.cover{
    display:none ;
}
.face >img{
    position: absolute;
    top:50%;
    left:50%;
}
@media (max-width: 500px) {
    .face.left >img{
        transform: rotateY(180deg) translateX(-53px);
    }}
/*
 * 最后，让皮卡丘动一下吧
 */
.nose{
    transform-origin: 50% 100%; 
    animation:  wave  infinite 0.8s linear;
}
.eyeball{
    transform-origin: 50% 100%; 
    animation:  move  infinite 3s ;
}
`
export default string;