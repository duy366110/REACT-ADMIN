import { TranslationMessages } from 'react-admin';
import vietnameseMessages from 'ra-language-vietnamese';

const customVietnameseMessages: TranslationMessages = {
    ...vietnameseMessages,
    pos: {
        search: 'Tìm kiếm',
        configuration: 'Cấu hình',
        language: 'Ngôn ngữ',
        theme: {
            name: 'Chủ đề',
            light: 'Sáng',
            dark: 'Tối',
        },
        dashboard: {
            monthly_revenue: 'Doanh thu hàng tháng',
            month_history: 'Lịch sử doanh thu 30 ngày',
            new_orders: 'Đơn hàng mới',
            pending_reviews: 'Đánh giá chờ xử lý',
            all_reviews: 'Xem tất cả đánh giá',
            new_customers: 'Khách hàng mới',
            all_customers: 'Xem tất cả khách hàng',
            pending_orders: 'Đơn hàng chờ xử lý',
            order: {
                items: 'bởi %{customer_name}, một món hàng |||| bởi %{customer_name}, %{nb_items} món hàng',
            },
            welcome: {
                title: 'Chào mừng bạn đến với demo react-admin e-commerce',
                subtitle:
                    'Đây là trang quản trị của một cửa hàng poster giả tưởng. Hãy tự do khám phá và chỉnh sửa dữ liệu - nó là dữ liệu cục bộ trên máy tính của bạn và sẽ được đặt lại mỗi lần bạn tải lại trang.',
                ra_button: 'Trang web react-admin',
                demo_button: 'Mã nguồn cho demo này',
            },
        },
        menu: {
            sales: 'Bán hàng',
            catalog: 'Danh mục',
            customers: 'Khách hàng',
        },
        events: {
            review: {
                title: 'Đã đăng đánh giá trên "%{product}"',
            },
            order: {
                title: 'Đặt 1 poster |||| Đặt %{smart_count} poster',
            },
        },
    },
    resources: {
        customers: {
            name: 'Khách hàng |||| Khách hàng',
            fields: {
                orders: 'Đơn hàng',
                first_seen: 'Lần đầu tiên nhìn thấy',
                full_name: 'Tên đầy đủ',
                groups: 'Phân khúc',
                last_seen: 'Lần cuối nhìn thấy',
                last_seen_gte: 'Thăm từ',
                name: 'Tên',
                total_spent: 'Tổng chi tiêu',
                password: 'Mật khẩu',
                confirm_password: 'Xác nhận mật khẩu',
                stateAbbr: 'Tỉnh/Thành phố',
            },
            filters: {
                last_visited: 'Lần truy cập gần nhất',
                today: 'Hôm nay',
                this_week: 'Tuần này',
                last_week: 'Tuần trước',
                this_month: 'Tháng này',
                last_month: 'Tháng trước',
                earlier: 'Trước đây',
                has_ordered: 'Đã đặt hàng',
                has_newsletter: 'Đã đăng ký nhận bản tin',
                group: 'Phân khúc',
            },
            fieldGroups: {
                identity: 'Thông tin cá nhân',
                address: 'Địa chỉ',
                stats: 'Thống kê',
                history: 'Lịch sử',
                password: 'Mật khẩu',
                change_password: 'Đổi mật khẩu',
            },
            page: {
                delete: 'Xóa khách hàng',
            },
            errors: {
                password_mismatch: 'Mật khẩu xác nhận không khớp với mật khẩu.',
            },
            notifications: {
                created:
                    'Khách hàng đã được tạo |||| %{smart_count} khách hàng đã được tạo',
                updated:
                    'Khách hàng đã được cập nhật |||| %{smart_count} khách hàng đã được cập nhật',
                deleted:
                    'Khách hàng đã được xóa |||| %{smart_count} khách hàng đã bị xóa',
            },
        },
        orders: {
            name: 'Đơn hàng |||| Đơn hàng',
            amount: '1 đơn hàng |||| %{smart_count} đơn hàng',
            title: 'Đơn hàng %{reference}',
            fields: {
                basket: {
                    delivery: 'Vận chuyển',
                    reference: 'Tham chiếu',
                    quantity: 'Số lượng',
                    sum: 'Tổng cộng',
                    tax_rate: 'Tỷ lệ thuế',
                    taxes: 'Thuế',
                    total: 'Tổng',
                    unit_price: 'Giá đơn vị',
                },
                address: 'Địa chỉ',
                customer_id: 'Khách hàng',
                date_gte: 'Đã qua từ',
                date_lte: 'Đã qua trước',
                nb_items: 'Số lượng món hàng',
                total_gte: 'Số tiền tối thiểu',
                status: 'Trạng thái',
                returned: 'Đã trả lại',
            },
            section: {
                order: 'Đơn hàng',
                customer: 'Khách hàng',
                shipping_address: 'Địa chỉ giao hàng',
                items: 'Món hàng',
                total: 'Tổng cộng',
            },
            notifications: {
                created:
                    'Đơn hàng đã được tạo |||| %{smart_count} đơn hàng đã được tạo',
                updated:
                    'Đơn hàng đã được cập nhật |||| %{smart_count} đơn hàng đã được cập nhật',
                deleted:
                    'Đơn hàng đã được xóa |||| %{smart_count} đơn hàng đã bị xóa',
            },
        },
        invoices: {
            name: 'Hóa đơn |||| Hóa đơn',
            fields: {
                date: 'Ngày hóa đơn',
                customer_id: 'Khách hàng',
                order_id: 'Đơn hàng',
                date_gte: 'Đã qua từ',
                date_lte: 'Đã qua trước',
                total_gte: 'Số tiền tối thiểu',
                address: 'Địa chỉ',
            },
            notifications: {
                created:
                    'Hóa đơn đã được tạo |||| %{smart_count} hóa đơn đã được tạo',
                updated:
                    'Hóa đơn đã được cập nhật |||| %{smart_count} hóa đơn đã được cập nhật',
                deleted:
                    'Hóa đơn đã được xóa |||| %{smart_count} hóa đơn đã bị xóa',
            },
        },
        products: {
            name: 'Áp phích |||| Áp phích',
            fields: {
                category_id: 'Danh mục',
                height_gte: 'Chiều cao tối thiểu',
                height_lte: 'Chiều cao tối đa',
                height: 'Chiều cao',
                image: 'Hình ảnh',
                price: 'Giá',
                reference: 'Tham chiếu',
                sales: 'Doanh số',
                stock_lte: 'Tồn kho thấp',
                stock: 'Tồn kho',
                thumbnail: 'Ảnh thu nhỏ',
                width_gte: 'Chiều rộng tối thiểu',
                width_lte: 'Chiều rộng tối đa',
                width: 'Chiều rộng',
            },
            tabs: {
                image: 'Hình ảnh',
                details: 'Chi tiết',
                description: 'Mô tả',
                reviews: 'Đánh giá',
            },
            filters: {
                categories: 'Danh mục',
                stock: 'Tồn kho',
                no_stock: 'Hết hàng',
                low_stock: '1 - 9 món',
                average_stock: '10 - 49 món',
                enough_stock: '50 món trở lên',
                sales: 'Doanh số',
                best_sellers: 'Bán chạy nhất',
                average_sellers: 'Bán trung bình',
                low_sellers: 'Bán thấp',
                never_sold: 'Chưa bán',
            },
            notifications: {
                created:
                    'Áp phích đã được tạo |||| %{smart_count} áp phích đã được tạo',
                updated:
                    'Áp phích đã được cập nhật |||| %{smart_count} áp phích đã được cập nhật',
                deleted:
                    'Áp phích đã được xóa |||| %{smart_count} áp phích đã bị xóa',
            },
        },
        categories: {
            name: 'Danh mục |||| Danh mục',
            fields: {
                products: 'Sản phẩm',
            },
            notifications: {
                created:
                    'Danh mục đã được tạo |||| %{smart_count} danh mục đã được tạo',
                updated:
                    'Danh mục đã được cập nhật |||| %{smart_count} danh mục đã được cập nhật',
                deleted:
                    'Danh mục đã được xóa |||| %{smart_count} danh mục đã bị xóa',
            },
        },
        reviews: {
            name: 'Đánh giá |||| Đánh giá',
            amount: '1 đánh giá |||| %{smart_count} đánh giá',
            relative_to_poster: 'Đánh giá về áp phích',
            detail: 'Chi tiết đánh giá',
            fields: {
                customer_id: 'Khách hàng',
                order_id: 'Đơn hàng',
                product_id: 'Sản phẩm',
                date_gte: 'Đã đăng từ',
                date_lte: 'Đã đăng trước',
                date: 'Ngày',
                comment: 'Bình luận',
                rating: 'Đánh giá',
            },
            action: {
                accept: 'Chấp nhận',
                reject: 'Từ chối',
            },
            notifications: {
                created:
                    'Đánh giá đã được tạo |||| %{smart_count} đánh giá đã được tạo',
                updated:
                    'Đánh giá đã được cập nhật |||| %{smart_count} đánh giá đã được cập nhật',
                deleted:
                    'Đánh giá đã được xóa |||| %{smart_count} đánh giá đã bị xóa',
                approved_success: 'Đánh giá đã được chấp nhận',
                approved_error: 'Lỗi: Đánh giá không được chấp nhận',
                rejected_success: 'Đánh giá đã bị từ chối',
                rejected_error: 'Lỗi: Đánh giá không bị từ chối',
            },
        },
        segments: {
            name: 'Phân khúc |||| Các phân khúc',
            fields: {
                customers: 'Khách hàng',
                name: 'Tên',
            },
            data: {
                compulsive: 'Thích mua sắm',
                collector: 'Nhà sưu tập',
                ordered_once: 'Đặt hàng một lần',
                regular: 'Khách hàng thường xuyên',
                returns: 'Trả lại sản phẩm',
                reviewer: 'Người đánh giá',
            },
        },
        access: {
            name: 'Truy cập',
        },
    },
};

export default customVietnameseMessages;
