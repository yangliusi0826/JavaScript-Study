var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1


// 执行上下文
var a = "global scope";
function checkscope(){
    var a = "local scope";
    console.log(this)
    function f(){
        console.log(this)
        return a;
    }
    return f();
}
checkscope();


/**
 *  1. 执行全局代码，将全局上下文压入执行上下文栈
 *     ECStack = [ globalContext ]
 * 
 * 
 *  2.
 *    1). 全局上下文被初始化
 *       globalContext = {
 *         VO: [global],
 *         Scope: [globalContext.VO],
 *         this: globalContext.VO
 *       }
 *    2). 初始化的同时，checkscope函数被创建，保存作用域链到函数内部属性[[scope]]
 *       checkscope.[[scope]] = [
 *         globalContext.VO
 *       ]
 * 
 * 
 *  3. 执行checkscope函数，将checkscope函数执行上下文压入执行上下文栈
 *     ECStack = [checkscopeContext, globalContext]
 * 
 * 
 *  4. checkscope函数执行上下文初始化
 *     1. 复制函数[[scope]]属性创建作用域链
 *     2. 用arguments创建活动对象
 *     3. 初始化活动对象，即加入形参，函数声明和变量声明
 *     4. 将活动对象压入checkscope作用域顶端
 *    同时函数f被创建，保存作用域链到函数内部属性[[scope]]
 *     checkscopeContext = {
 *       AO: {
 *         arguments: {
 *           length: 0
 *         },
 *         a: undefined,
 *         f: reference to function f(){}
 *       },
 *       Scope: [checkscopeContext.AO, globalContext.VO],
 *       this: undefined
 *     }
 * 
 *  5. 函数执行代码阶段，会根据执行的代码顺序修改活动对象的值，例如执行完var a = "local scope";后，活动对象的值为
 *     checkscopeContext.AO = {
 *       arguments: {
 *         length: 0
 *       },
 *       a: 'local scope',
 *       f: reference to function f(){}
 *     }
 * 
 * 
 *  6. 执行f函数，创建f函数执行上下文，f函数执行上下文被压入执行上下文栈
 *      ECStack = [fContext, checkscopeContext, globalContext]
 * 
 * 
 *  7. f函数执行上下文初始化，同步骤4
 *      1. 复制函数[[scope]]属性创建作用域链
 *      2. 用arguments创建活动对象
 *      3. 初始化活动对象，即加入形参，函数声明和变量声明
 *      4. 将活动对象压入f作用域顶端
 *      fContext = {
 *        AO: {
 *          arguments: {
 *            length: 0
 *          }
 *        },
 *        Scope: [fContext.Ao, checkscopeContext.AO, globalContext.VO],
 *        this: undefined
 *      }
 * 
 * 
 *  8. f函数执行，沿着作用域链查找a值，返回a值
 * 
 * 
 *  9. f函数执行完毕，f函数执行上下文从执行上下文栈中弹出
 *      ECStack = [checkscopeContext, globalContext]
 * 
 * 
 *  10. checkscope函数执行完毕，checkscope函数执行上下文从执行上下文栈中弹出
 *      ECStack = [globalContext]
 */