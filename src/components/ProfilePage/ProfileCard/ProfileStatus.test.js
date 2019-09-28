import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileCard component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='status for test'/>);
        const root = component.root;
        expect(root.statusValue).toBe('status for test');
    });
    test("span with status should be displayed", () => {
        const component = create(<ProfileStatus status='status for test'/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
});