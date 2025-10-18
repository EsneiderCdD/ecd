// src/components/About/Dropdown/Dropdown.jsx
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  FolderPlus,
  Handshake,
} from "lucide-react";
import styles from "./Dropdown.module.css";
import ContactModal from "@/components/ContactModal/ContactModal";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    subject: "",
  });
  const dropdownRef = useRef(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (subject) => {
    setModalConfig({
      isOpen: true,
      subject: subject,
    });
    setIsOpen(false);
  };

  const closeModal = () => {
    setModalConfig({
      isOpen: false,
      subject: "",
    });
  };

  return (
    <>
      <div className={styles.dropdown} ref={dropdownRef}>
        {/* Botón principal */}
        <div
          className={styles.dropdownToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/128/924/924915.png" 
            alt="Nuevo" 
            className={styles.addIcon}
          />
        </div>

        {/* Menú desplegable */}
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <div
              className={styles.dropdownItem}
              onClick={() => handleOptionClick("Nueva invitación a colaborar")}
            >
              <Users className={styles.itemIcon} />
              Nueva invitación a colaborar
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => handleOptionClick("Nueva propuesta freelance")}
            >
              <Briefcase className={styles.itemIcon} />
              Nueva propuesta freelance
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => handleOptionClick("Nueva oferta laboral")}
            >
              <FileText className={styles.itemIcon} />
              Nueva oferta laboral
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => handleOptionClick("Nuevo proyecto")}
            >
              <FolderPlus className={styles.itemIcon} />
              Nuevo proyecto
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => handleOptionClick("Nueva propuesta")}
            >
              <Handshake className={styles.itemIcon} />
              Nueva propuesta
            </div>
            <div
              className={styles.dropdownItem}
              onClick={() => handleOptionClick("Nueva conversación")}
            >
              <MessageSquare className={styles.itemIcon} />
              Nueva conversación / amigo :D
            </div>
          </div>
        )}
      </div>

      {/* Modal de contacto */}
      <ContactModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        subject={modalConfig.subject}
      />
    </>
  );
}

export default Dropdown;