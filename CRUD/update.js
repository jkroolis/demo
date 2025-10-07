// 编辑用户（Update）
async function editUser(id) {
// 先获取该用户当前信息（Read的复用）
const response = await fetch(`/api/users/${id}`);
const user = await response.json();

// 弹出输入框获取新姓名
const newName = prompt('请输入新姓名', user.name);
if (!newName) return;

try {
// 发送PUT请求更新数据
await fetch(`/api/users/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ ...user, name: newName })
});

// 更新后刷新列表
loadUsers();
} catch (error) {
console.error('更新失败:', error);
}
}