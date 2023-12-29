import {Link, useLocation} from 'react-router-dom';

const AdminAddFoodItem = () => {
  const location = useLocation();

  const isAdminPath = location.pathname.includes('/admin/');

  return isAdminPath ? (
    <div className="add-new-foodItem-container mb-3">
      <h3 className="add-new-food-title">Catalog</h3>
      <Link className="btn btn-light add-food-btn" to="/admin/add-new-food">
        Add new Food
      </Link>
    </div>
  ) : null;
};

export default AdminAddFoodItem;