import { loadCyborgs, editCyborg, handleCyborgForm, toggleCyborgFormButtons } from "./cyborg.js";
import {loadEnhancements, handleEnhancementForm, toggleEnhancementFormButtons} from "./enhancements.js";
import { deleteCyborg, deleteEnhancement } from "./api.js";

export function bindEvents() {
    $("#cyborgForm").submit(handleCyborgForm);


    $("#cyborgTable").on("click", ".edit-cyborg", function () {
        const row = $(this).closest("tr");
        toggleCyborgFormButtons(true)
        editCyborg(
            row.data("id"),
            row.data("name"),
            row.data("birthyear"),
            row.data("country"),
            row.data("bio")
        );
    });

    $("#cancelCyborgEdit").on("click", function(){
        $("#cyborgForm")[0].reset();
        $("#cyborgId").val("");
        toggleCyborgFormButtons(false);
    })

    $("#cyborgTable").on("click", ".delete-cyborg", function () {
        const id = $(this).closest("tr").data("id");
        deleteCyborg(id, loadCyborgs);
    });

    $("#fetchCyborgs").click(loadCyborgs);

    $("#cyborgTable").on("click", ".manage-enhancements", function () {
        const cyborgId = $(this).closest("tr").data("id");
        loadEnhancements(cyborgId);
    });

    $("#enhancementForm").submit(handleEnhancementForm);

    $("#enhancementsList").on("click", ".edit-enhancement", function () {
        toggleEnhancementFormButtons(true)
        $("#enhancementId").val($(this).data("id"));
        $("#enhancementName").val($(this).data("name"));
        $("#enhancementDescription").val($(this).data("desc"));
        $("#enhancementType").val($(this).data("type"));
        $("#enhancementManufacturer").val($(this).data("manufacturer"));
    });

    $("#cancelEnhancementEdit").on("click", function(){
        $("#enhancementForm")[0].reset();
        $("#enhancementId").val("");
        toggleEnhancementFormButtons(false)
    })

    $("#enhancementsList").on("click", ".delete-enhancement", function () {
        const enhancementId = $(this).data("id");
        deleteEnhancement(enhancementId, $("#cyborgEnhancementId").val(), loadEnhancements);
    });
}
