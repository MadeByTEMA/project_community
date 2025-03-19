import { executeQuery } from '@/lib/db';
import {
  getAllCommonMenus,
  getCommonMenuById,
  getCommonMenusByUpperMenuId,
  getCommonMenusByDepth,
  getCommonMenusWithBoard
} from '@/queries/common_menu';
import { withLogging } from '@/lib/withLogging';
import { withErrorHandling } from '@/lib/withErrorHandling';

async function handler(req) {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
    }

    const { menuId, upperMenuId, depth } = await req.json();
    let menus;

    if (menuId) {
      menus = await executeQuery(getCommonMenuById, [menuId]);
    } else if (upperMenuId) {
      menus = await executeQuery(getCommonMenusByUpperMenuId, [upperMenuId]);
    } else if (depth) {
      menus = await executeQuery(getCommonMenusByDepth, [depth]);
    } else {
      console.log("test");
      menus = await executeQuery(getAllCommonMenus);
      console.log("test2");
    }
    console.log(JSON.stringify(menus));
    return new Response(JSON.stringify(menus), { status: 200 });
  } catch (error) {
    console.error('메뉴 조회 오류:', error);
    return new Response(JSON.stringify({ error: '메뉴를 불러오는 중 오류 발생' }), { status: 500 });
  }
}

export const POST = withLogging(withErrorHandling(handler));
