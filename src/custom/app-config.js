// ============================================================
// 🎨 カスタムアプリ設定 - 自由に変更可能
// ============================================================

export const APP_CONFIG = {
    // アプリの基本情報（自由に変更可能）
    name: "電卓アプリ",
    version: "1.0",
    description: "Firebase + Google認証による計算履歴保存機能付き電卓",
    
    // デフォルト値設定（カスタマイズ可能）
    defaults: {
        display: "0",
        maxDigits: 12,
        precision: 8 // 小数点以下桁数
    },
    
    // UI設定（カスタマイズ可能）
    ui: {
        theme: {
            primaryColor: "#2c3e50",
            secondaryColor: "#34495e",
            successColor: "#27ae60",
            backgroundColor: "#ecf0f1",
            numberColor: "#3498db",
            operatorColor: "#e74c3c",
            equalColor: "#27ae60"
        },
        
        // 電卓ボタン配置（自由に変更・追加可能）
        calculatorButtons: [
            ["C", "±", "%", "÷"],
            ["7", "8", "9", "×"],
            ["4", "5", "6", "−"],
            ["1", "2", "3", "+"],
            ["0", ".", "="]
        ],
        
        // キーボードショートカット設定（カスタマイズ可能）
        keyboard: {
            clear: "Escape",           // クリア
            equals: "Enter",           // 計算実行
            delete: "Backspace"        // 1文字削除
        },
        
        // 表示設定
        display: {
            maxHistoryItems: 20,       // 履歴表示件数
            dateFormat: "YYYY-MM-DD",  // 日付形式
            timeFormat: "HH:mm:ss"     // 時刻形式
        }
    },
    
    // データ設定（カスタマイズ可能）
    data: {
        // Firebase Collection名（変更する場合は注意）
        collection: "calculations",
        
        // 必須フィールド
        requiredFields: ["expression", "result", "date", "time"],
        
        // オプションフィールド
        optionalFields: ["memo", "userEmail"]
    }
};

// デバッグ設定（開発時のみ有効にする）
export const DEBUG_CONFIG = {
    enabled: true,  // false にすると全デバッグ機能が無効
    features: {
        console: true,      // コンソール出力
        copyButtons: true,  // コピーボタン
        apiLogs: true,      // API通信ログ
        userActions: true   // ユーザー操作ログ
    }
};