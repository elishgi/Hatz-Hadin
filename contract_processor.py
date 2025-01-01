from docx import Document

def read_contract(file_path):
    """
    קורא חוזה מקובץ טקסט או Word.
    """
    try:
        # זיהוי סוג הקובץ לפי הסיומת
        file_extension = file_path.split('.')[-1].lower()

        if file_extension == 'txt':
            # ניסיון קריאה במספר קידודים
            encodings = ['utf-8', 'windows-1255', 'iso-8859-1']
            for encoding in encodings:
                try:
                    with open(file_path, 'r', encoding=encoding) as file:
                        content = file.read()
                    return content
                except UnicodeDecodeError:
                    continue  # מנסה את הקידוד הבא
            return "Error: Could not decode the .txt file. Please check the encoding."

        elif file_extension == 'docx':
            # קריאה בטוחה של קובץ Word
            try:
                doc = Document(file_path)
                content = "\n".join([paragraph.text for paragraph in doc.paragraphs])
                if not content.strip():
                    return "Error: The Word file is empty or unreadable."
                return content
            except Exception as e:
                return f"Error reading Word file: {str(e)}"

        else:
            return "Error: Unsupported file format. Please upload a .txt or .docx file."

    except FileNotFoundError:
        return "Error: The file does not exist."
    except Exception as e:
        return f"Error: {str(e)}"

def find_keywords(content, keywords):
    """
    מחפש מילות מפתח בטקסט החוזה.
    """
    found = []
    for keyword in keywords:
        if keyword.lower() in content.lower():  # חיפוש בלתי תלוי באותיות רישיות
            found.append(keyword)
    return found

def get_recommendations(found_keywords):
    """
    מספק המלצות לתיקון על סמך מילות מפתח שנמצאו.
    """
    recommendations = {
        'ריבית': 'שקול להשתמש ב"היתר עסקה" כדי להימנע מאיסור ריבית.',
        'כפייה': 'ודא שהניסוח בחוזה מאפשר גמישות לשני הצדדים.',
        'חוזה': 'וודא שכל סעיף מוגדר היטב עם תנאים ברורים.',
        'סנקציות': 'בדוק אם הסנקציות מתאימות להלכה ולחוק.',
        'בונוס': 'ודא שהבונוס מבוסס על קריטריונים ברורים ולא שרירותיים.',
        'קנס': 'בדוק אם הקנס מידתי ומותאם לכללי ההלכה.',
        'עיקול רכוש': 'בדוק אם העיקול מתבצע בהתאם להלכה.',
        'גישור': 'וודא שהגישור מתבצע על ידי גורם מוסמך ותוך שקיפות מלאה.',
    }
    return [recommendations[keyword] for keyword in found_keywords if keyword in recommendations]
