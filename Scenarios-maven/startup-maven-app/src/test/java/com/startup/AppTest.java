package com.startup;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AppTest {
    @Test
    public void testStatus() {
        assertEquals("READY", App.getStatus());
    }
}