## **HTML学习文档** ##

<br>

### **一、HTML元素学习** ###

#### &emsp; &emsp; 1. &lt; div&gt; ：元素划分元素 ####

 &emsp; &emsp; HTML&lt; div&gt; 元素是一个通用型的流内容容器，在不使用CSS的情况下，其对内容或布局没有任何影响。然而它可以将内容分组，从而可以使用class或是id属性方便的定义内容的格式。
 <br>
 &emsp; &emsp; 下面这个例子使用CSS将样式应用于&lt; div&gt; ，从而创建一个阴影框。注意使用&lt; div&gt; 上的 class属性将名为“shadowbox”的样式应用于元素：
 <br>
 

#### **HTML：** ####

    <div class="shadowbox">
        <p>Here's a very interesting note displayed in a
        lovely shadowed box.</p>
    </div>

#### **CSS：** ####

    .shadowbox {
        width: 15em;
        border: 1px solid #333;
        box-shadow: 8px 8px 5px #444;
        padding: 8px 12px;
        background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
    }

<br>

### **二、CSS学习** ###
